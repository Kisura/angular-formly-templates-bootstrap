export default ngModule => {
  ngModule.config(addRadioType);

  function addRadioType(formlyConfigProvider, $interpolateProvider) {
    formlyConfigProvider.setType({
      name: 'radio',
      template: `<div class="radio-group">
        <div ng-repeat="(key, option) in to.options" class="radio">
          <label>
            <input type="radio"
                   id="${$interpolateProvider.startSymbol()}id + '_'+ $index${$interpolateProvider.endSymbol()}"
                   tabindex="0"
                   ng-value="option[to.valueProp || 'value']"
                   ng-model="model[options.key]">
            ${$interpolateProvider.startSymbol()}option[to.labelProp || 'name']${$interpolateProvider.endSymbol()}
          </label>
        </div>
      </div>`,
      wrapper: ['bootstrapLabel', 'bootstrapHasError'],
      defaultOptions: {
        noFormControl: false
      },
      apiCheck: check => ({
        templateOptions: {
          options: check.arrayOf(check.object),
          labelProp: check.string.optional,
          valueProp: check.string.optional
        }
      })
    });
  }
};
