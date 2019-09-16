module.exports = {
    extends: 'stylelint-config-standard',
    plugins: ['stylelint-scss'],
    rules: {
      'max-nesting-depth': 6,
      'at-rule-no-unknown': null,
      'scss/at-rule-no-unknown': true,
      'no-descending-specificity': null,
      'selector-type-no-unknown': [
        true,
        {
          ignore: ['custom-elements']
        }
      ],
      'selector-class-pattern': [
        '^[a-z0-9\\-_]+$',
        {
          message: 'Hey, Selector should be written in lowercase with hyphens and underscore (selector-class-pattern)'
        }
      ]
    }
  };
