// DOMツリーが構築されたときに実行(他のJavascriptの読込も完了した後に実行します)
$(function () {
  // 未選択のセレクトボックス
  const $noneSelected = $('#none-selected-items');

  // 選択済みのセレクトボックス
  const $selected = $('#selected-items');

  // 右に移動
  $('.js-item-to-right').on('click', function () {
    // 選択されているoption(option:selected)を取得
    const val = $('#none-selected-items option:selected').val();
    const text = $('#none-selected-items option:selected').text();
    console.log(selected);
    console.log(text);
    if (!val) {
      return;
    }
    // 選択を解除
    $('#none-selected-items option').attr('selected', false);
    // 選択済みのセレクトボックスに移動
    $selected.append(`<option value=${val}>${text}</option>`);
    $('#none-selected-items option:selected').remove();
  });

  // 右に全て移動
  $('.js-item-to-right-all').on('click', function () {
    // 全てのoptionを取得
    const getOption = $('#none-selected-items  option');
    // 選択済みのセレクトボックスに移動
    getOption.map((index, item) => {
      $selected.append(item);
    });
  });

  // 左に移動
  $('.js-item-to-left').on('click', function () {
    // 選択されているoption(option:selected)を取得
    const val = $('#selected-items option:selected').val();
    const text = $('#selected-items option:selected').text();
    if (!val) {
      return;
    }
    // 選択を解除
    $('#selected-items > option').attr('selected', false);
    // 未選択のセレクトボックスに移動
    $noneSelected.append(`<option value=${val}>${text}</option>`);
    $('#selected-items > option:selected').remove();
  });

  // 左に全て移動
  $('.js-item-to-left-all').on('click', function () {
    // 全てのoptionを取得
    const getOption = $('#selected-items  option');
    // 未選択のセレクトボックスに移動
    getOption.map((index, item) => {
      $noneSelected.append(item);
    });
  });
});
