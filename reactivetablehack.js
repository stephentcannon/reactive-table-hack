ReactiveTableHack = {
  injectKeywordFilter: function(template, name){
    var reactiveTableFilter = template.find('.reactive-table-filter');
    //var reactiveTableFiler = $('.reactive-table-filter');
    var html;
    html = '<span class="input-group-addon"><i class="fa fa-search"></i></span><input class="form-control" type="text" id="keywords" name="keywords" value="' + Session.get('keywords') + '" data-toggle="tooltip" title="Enter keywords">';
    reactiveTableFilter.childNodes.item(1).className = 'input-group col-sm-10 col-sm-offset-2';
    var inputGroup = reactiveTableFilter.childNodes.item(1);
    inputGroup.innerHTML = html + inputGroup.innerHTML;
  
    Session.set(name + '-reactive-table-filter', null);
  },
  injectIntoTableFilter: function(template, name){
    var html;
    html = '<span class="input-group-addon"><i class="fa fa-calendar"></i></span><input class="form-control" type="date" id="start_date" name="start_date" value="' + moment( Session.get('start_date_selected') ).format('YYYY-MM-DD') + '" data-toggle="tooltip" title="Select a valid Start Date. Format: mm/dd/yyyy"><span class="input-group-addon"><i class="fa fa-calendar"></i></span><input class="form-control" type="date" id="end_date" name="end_date" value="' + moment( Session.get('end_date_selected') ).format('YYYY-MM-DD') + '" data-toggle="tooltip" title="Select a valid End Date. Format: mm/dd/yyyy">';
    // console.log(reactiveTableFilter.childNodes.item(1).className);
    // below removed 1.28.2015
    // reactiveTableFilter.childNodes.item(1).className = 'input-group col-sm-10 col-sm-offset-2';
    var reactiveTableFilter = template.find('.reactive-table-filter');
    // console.log(reactiveTableFilter);
    if(reactiveTableFilter){
      template.$('.reactive-table-filter').removeClass('col-sm-8');
      template.$('.reactive-table-filter').addClass('col-sm-10 col-sm-offset-2');
      //console.log(reactiveTableFilter.childNodes);
      var inputGroup = reactiveTableFilter.childNodes.item(1);
      inputGroup.innerHTML = html + inputGroup.innerHTML;
    } else {
      var reactiveTable = template.find('#reactive-table-1');
      if(reactiveTable){
        // console.log('we have a reactive table');
        // console.log(reactiveTable);
        template.$(reactiveTable).before('<div class="form-group reactive-table-filter col-sm-10 col-sm-offset-2 pull-right"><div class="input-group">' + html + '</div></div>');
      }
    }
    
    Session.set(name + '-reactive-table-filter', null);
  },
  interceptEvents: function(event, template, name){
    event.preventDefault();
    // console.log('event');
    // console.log(event);
    // console.log('event.target.name');
    // console.log( event.target.name);
    // console.log('event.target.value');
    // console.log( event.target.value);
    // console.log('event.currentTarget');
    // console.log(event.currentTarget);
    if(event.target.name == 'start_date' || event.target.name == 'end_date' || event.target.name == 'keywords'){
     //  console.log('start or end date');
      event.stopPropagation();
      event.stopImmediatePropagation();
      Session.set(name + '-reactive-table-filter', null);
    } else {
      // console.log('this is not the start or end date');
    }
  },
  blurKeywordEvent: function(event, template, name){
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    // console.log('blur #end_date');
    Session.set(name, event.target.value);
  },
  blurDateEvent: function(event, template, name){
    // console.log('blurDateEvent');
    // console.log('name: ' + name);
    // console.log('event.target.value: ' + event.target.value );
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    // console.log('blur #end_date');
    Session.set(name, moment(event.target.value).format('MM/DD/YYYY'));
  }
}



