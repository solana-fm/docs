/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docs: [
    "intro",
    "getting-started",
    "limitations",
    "best-practices",
    {
      type: 'category',
      label: 'Models',
      items: [
        "models/account-input",
        "models/account-instruction",
        "models/account-transaction",
        "models/block",
        "models/block-reward",
        "models/epoch",
        "models/instruction",
        "models/token",
        "models/transaction",
        "models/transaction-log",
        "models/transaction-signature",
      ],
    },
    "dynamic-queries",
    "nested-queries"    // {
    //   type: 'autogenerated', 
    //   dirName: '.'}
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};
