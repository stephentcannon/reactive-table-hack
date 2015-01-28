reactive-table-hack
===================
adds two date time selectors in front of the filter

inject date time by filter
===========================

````
Template.yourtemplate.rendered = function(){
  ReactiveTableHack.injectIntoTableFilter(this, 'name');
};
````

* 'name' - results in a session variable name-reactive-table-filter


````
injectKeywordFilter

````
* injectsKeywordFilter

events hack
===========

````
Template.yourtemplate.events({
  'keyup .reactive-table-input': function(event, template){
    ReactiveTableHack.interceptEvents(event, template);
  },
  'blur #end_date': function(event, template){
    ReactiveTableHack.blurDateEvent(event, template, 'end_date_selected');
  },
  'blur #start_date': function(event, template){
    ReactiveTableHack.blurDateEvent(event, template, 'start_date_selected');
  },
});
````