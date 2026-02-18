// Task 2: The Colony Permit (KubeJS)

ServerEvents.recipes(event => {
    // --- MineColonies Supply Camp Gating ---
    // Remove default recipe for supply camp deployer
    event.remove({ output: 'minecolonies:supply_camp_deployer' })
    // Remove default recipe for supply chest deployer
    event.remove({ output: 'minecolonies:supply_chest_deployer' })

    // Add new shaped recipe for Supply Camp Deployer
    // Requires significant investment: Gold (Capital), Paper (Deed), Tech & Construction materials.
    event.shaped('minecolonies:supply_camp_deployer', [
        'GGG',
        ' P T',
        'CCC'
    ], {
        G: 'minecraft:gold_block',
        P: 'minecraft:paper',
        T: 'create:precision_mechanism', // Tech gate (Chapter 4)
        C: 'immersiveengineering:treated_wood_horizontal' // Construction gate
    })

    // Add similar recipe for Supply Chest Deployer if needed, or leave it obtainable only via other means.
    // For consistency, let's add a recipe for the Chest Deployer as well, slightly cheaper but still gated.
    event.shaped('minecolonies:supply_chest_deployer', [
        'GGG',
        ' P T',
        'CCC'
    ], {
        G: 'minecraft:gold_ingot', // Cheaper than blocks
        P: 'minecraft:paper',
        T: 'create:precision_mechanism',
        C: 'immersiveengineering:treated_wood_horizontal'
    })
})
