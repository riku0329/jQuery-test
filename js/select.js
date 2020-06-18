// DOMツリーが構築されたときに実行(他のJavascriptの読込も完了した後に実行します)
$(function () {
  // 未選択のセレクトボックス
  const $noneSelected = $('#none-selected-items');

  // 選択済みのセレクトボックス
  const $selected = $('#selected-items');

  // 右に移動
  $('.js-item-to-right').on('click', function () {
    // 選択されているoption(option:selected)を取得
    const val = $noneSelected.find('option:selected');
    console.log(val);
    if (!val) {
      return;
    }
    // 選択を解除
    $noneSelected.find('option:selected').attr('selected', false);
    // 選択済みのセレクトボックスに移動
    $selected.append(val);
    $noneSelected.find('option:selected').remove();
  });

  // 右に全て移動
  $('.js-item-to-right-all').on('click', function () {
    // 全てのoptionを取得
    const val = $noneSelected.children();
    console.log(val);
    // 選択済みのセレクトボックスに移動
    $selected.append(val);
  });

  // 左に移動
  $('.js-item-to-left').on('click', function () {
    // 選択されているoption(option:selected)を取得
    const val = $selected.find('option:selected');
    console.log(val);
    if (!val) {
      return;
    }
    // 選択を解除
    $selected.find('option:selected').attr('selected', false);
    // 選択済みのセレクトボックスに移動
    $noneSelected.append(val);
    $selected.find('option:selected').remove();
  });

  // 左に全て移動
  $('.js-item-to-left-all').on('click', function () {
    // 全てのoptionを取得
    const val = $selected.children();
    // 未選択のセレクトボックスに移動
    $noneSelected.append(val);
  });
});
