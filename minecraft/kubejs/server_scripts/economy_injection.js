// Task 3: The Economy Injection (LootJS)

LootJS.modifiers(event => {
    // Define target mods
    const targets = ['twilightforest', 'aether', 'integrated_dungeons_and_structures', 'idas']

    targets.forEach(mod => {
        // --- Action A (Cleanup) ---
        // Remove vanilla tools and armor to prevent progression skipping
        event.addLootTypeModifier(LootType.CHEST)
            .anyStructure(mod) // Target structures from these mods (if supported by LootJS structure filter, or just by mod filter below)
            // Ideally we filter by loot table ID starting with mod ID
            .matchLoot(Ingredient.of(/minecraft:(iron|diamond)_(sword|pickaxe|axe|shovel|hoe|helmet|chestplate|leggings|boots)/))
            .remove(Ingredient.of(/minecraft:(iron|diamond)_(sword|pickaxe|axe|shovel|hoe|helmet|chestplate|leggings|boots)/))

        // Also remove MineColonies supply items from ALL chests in these mods
        event.addLootTypeModifier(LootType.CHEST)
            .id(new RegExp(`^${mod}:`)) // Target loot tables starting with mod ID
            .remove('minecolonies:supply_camp_deployer')
            .remove('minecolonies:supply_ship_deployer')

        // --- Action B (Reward) ---
        // Add SSV Currency (kubejs:gold_coin) with ~40% chance
        event.addLootTypeModifier(LootType.CHEST)
            .id(new RegExp(`^${mod}:`))
            .randomChance(0.4)
            .addLoot('kubejs:gold_coin')

        // --- Action C (Jackpot) ---
        // Add Jackpot Item (Totem of Undying placeholder) with 5% chance
        event.addLootTypeModifier(LootType.CHEST)
            .id(new RegExp(`^${mod}:`))
            .randomChance(0.05)
            .addLoot('minecraft:totem_of_undying')
    })

    // Fallback for IDAS if it uses minecraft namespace for some structures or different logic
    // We can also target by specific loot table regex if needed.
    // generally .id(regex) is the best way to modify loot tables from specific mods.
})
