$('#kgrid_content').pillar({
  items: '.kgrid_item',
  spacing: this.spacing,
  columns: {
    '479': this.mobCol,
    '767': this.mobCol,
    '959': this.tabletCol,
    'max': this.maxCols
  },
  imageLoaded: function() {
    $(this).closest('.kgrid_item').addClass('loaded')
  }
});

$('#kgrid_album').pillar({
  items: '.kgrid_item',
  spacing: this.spacing_album,
  columns: {
    '479': this.mobCol_album,
    '767': this.mobCol_album,
    '959': this.tabletCol_album,
    'max': this.maxCols_album
  },
  imageLoaded: function() {
    $(this).closest('.kgrid_item').addClass('loaded')
  }
});

$('#kgrid_featured_album').pillar({
  items: '.kgrid_item',
  spacing: this.spacing_album,
  columns: {
    '479': this.mobCol_album,
    '767': this.mobCol_album,
    '959': this.tabletCol_album,
    'max': this.maxCols_album
  },
  imageLoaded: function() {
    $(this).closest('.kgrid_item').addClass('loaded')
  }
});

$('#kgrid_essay').pillar({
  items: '.kgrid_item',
  spacing: this.spacing_essay,
  columns: {
    '479': this.mobCol_essay,
    '767': this.mobCol_essay,
    '959': this.tabletCol_essay,
    'max': this.maxCols_essay
  },
  imageLoaded: function() {
    $(this).closest('.kgrid_item').addClass('loaded')
  }
});

$('#kgrid_featured_essay').pillar({
  items: '.kgrid_item',
  spacing: this.spacing_essay,
  columns: {
    '479': this.mobCol_essay,
    '767': this.mobCol_essay,
    '959': this.tabletCol_essay,
    'max': this.maxCols_essay
  },
  imageLoaded: function() {
    $(this).closest('.kgrid_item').addClass('loaded')
  }
});

$('#kgrid_favorites').pillar({
  items: '.kgrid_item',
  spacing: this.spacing_fav,
  columns: {
    '479': this.mobCol_fav,
    '767': this.mobCol_fav,
    '959': this.tabletCol_fav,
    'max': this.maxCols_fav
  },
  imageLoaded: function() {
    $(this).closest('.kgrid_item').addClass('loaded')
  }
});

$('#kgrid_timeline').pillar({
  items: '.kgrid_item',
  spacing: this.spacing_timeline,
  columns: {
    '479': this.mobCol_timeline,
    '767': this.mobCol_timeline,
    '959': this.tabletCol_timeline,
    'max': this.maxCols_timeline
  },
  imageLoaded: function() {
    $(this).closest('.kgrid_item').addClass('loaded')
  }
});
