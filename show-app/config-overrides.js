const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
     style: true,
    }),
    addLessLoader({
      javascriptEnabled: true,
      modifyVars: {  
      '@primary-color': '#ffd666',
      '@text-color': '#595959',
      '@heading-color': '#595959', // 标题色
      '@text-color-secondary' : '#595959' // 次文本色
      },
    }),
  );