const stylelint = require('stylelint');
const ruleName = 'color-contrast';

module.exports = stylelint.createPlugin(ruleName, () => {
  return (root, result) => {
    const validOptions = stylelint.utils.validateOptions(result, ruleName, {});
    if (!validOptions) {
      return;
    }

    stylelint.utils.report({});
  };
});

module.exports.ruleName = ruleName;

module.exports.messages = stylelint.utils.ruleMessages(ruleName, {
  expected: "Expected ...",
});
