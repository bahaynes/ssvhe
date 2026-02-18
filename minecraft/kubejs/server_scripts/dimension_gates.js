// Task 1: The Dimension Gates (KubeJS)

ServerEvents.recipes(event => {
    // --- Twilight Forest Catalyst ---
    // Create a custom item 'kubejs:forest_key' using Chapter 4 Tech components.
    // Replace 'create:precision_mechanism' with actual Chapter 4 item if different.
    event.shaped('kubejs:forest_key', [
        ' D ',
        ' P ',
        ' D '
    ], {
        D: 'minecraft:diamond', // Placeholder input
        P: 'create:precision_mechanism' // Core Chapter 4 item
    })

    // --- The Aether: Glowstone Recipe Change ---
    // Remove vanilla Glowstone recipe
    event.remove({ output: 'minecraft:glowstone' })

    // Add "Hard Mode" recipe for Glowstone
    // This recipe represents a complex assembly using Chapter 5 materials.
    event.shaped('minecraft:glowstone', [
        ' M ',
        'GDG',
        ' M '
    ], {
        M: 'botania:manasteel_ingot', // Placeholder for Chapter 5 magical material
        G: 'minecraft:glowstone_dust',
        D: 'minecraft:diamond' // Placeholder for high value core
    })
})

ServerEvents.tags('item', event => {
    // --- Twilight Forest Activation ---
    // Remove Diamond from the activator tag
    event.remove('twilightforest:portal/activator', 'minecraft:diamond')

    // Add the custom catalyst item to the activator tag
    // This makes the portal activate ONLY when this item is thrown in.
    event.add('twilightforest:portal/activator', 'kubejs:forest_key')
})


