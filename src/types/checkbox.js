export default ngModule => {
  ngModule.config(addCheckboxType);

  function addCheckboxType(formlyConfigProvider, $interpolateProvider) {
    formlyConfigProvider.setType({
      name: 'checkbox',
      template: `<div class="checkbox">
        <label>
          <input type="checkbox"
                 class="formly-field-checkbox"
                 ng-model="model[options.key]">
          ${$interpolateProvider.startSymbol()}to.label${$interpolateProvider.endSymbol()}
          ${$interpolateProvider.startSymbol()}to.required ? '*' : ''${$interpolateProvider.endSymbol()}
        </label>
      </div>`,
      wrapper: ['bootstrapHasError'],
      apiCheck: check => ({
        templateOptions: {
        	label: check.string
        }
      })
    });
  }
};
