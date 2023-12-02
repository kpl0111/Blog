// 代码块语言识别
$(function () {
  var $highlight_lang = $('<div class="code_lang" title="代码语言"></div>');

  $('pre').after($highlight_lang);
  $('pre code').each(function () {
    console.log("Processing element:", this);  // 输出当前处理的元素
    var code_language = $(this).attr('class');
    console.log($(this).attr('class'));
    console.log(code_language);

// if (!code_language) {
//   return true;
// };
    var lang_name = code_language.replace("line-numbers", "").trim().replace("language-", "").trim();
    console.log(lang_name);

    // 首字母大写
    lang_name = lang_name.slice(0, 1).toUpperCase() + lang_name.slice(1);
    lang_name = String(lang_name);
    console.log(lang_name);
    $(this).siblings(".code_lang").text(lang_name);
    console.log("Done");
  });
});