JEIEvents.hideItems((e) => {
  e.hide(global.removedItems);
  e.hide(global.hiddenItems);

  // Added specifically to kill the Uncrafting Table
  e.hide('twilightforest:uncrafting_table');
});
