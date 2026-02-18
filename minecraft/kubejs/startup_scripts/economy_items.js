// Register custom economy items
StartupEvents.registry('item', event => {
    event.create('gold_coin')
        .displayName('Gold Coin')
        .tooltip('Currency used in the SSV economy.')
        .rarity('common')

    // Register Forest Key for Twilight Forest Gating
    event.create('forest_key')
        .displayName('Forest Key')
        .tooltip('Used to activate the Twilight Forest portal.')
        .rarity('rare')
        .glow(true)
})
