var msg;
var menu;
var form;
var button;
var hidden;

function init(){
    msg = document.getElementById('msg');
    menu = document.getElementById('menu');
    form = document.getElementById('form');
    button = document.getElementById('button');
    hidden = document.getElementById('hidden');

    createDefaultFotm();
    CSSLayerStatementRule();
}

//計算式登録用フォームの作成
function createDefaultFotm(){
    var tr, th, td, input;
    var names = ['name', 'fields', 'formula'];
    form.innerHTML = '';
    //繰り返しで三つのフィールドを作成
    for(var i = 0;i<3;i++){
        //<tr>,<th>,<td>タグを作る
        tr = document.createElement("tr");
        th = document.createElement("th");
        th.textContent = names[i];
        td = document.createElement("td");
        //<input>タグを作る
        input = document.createElement("input");
        input.type = 'text';
        input.id = names[i];
        //fomula用のフィールドは横幅を広げる
        if(input.id=='formula'){
            input.size = '60';
        }
        //作ったタグの読み込み
        td.appendChild(input);
        tr.appendChild(th);
        tr.appendChild(td);
        form.appendChild(tr);
    }

    //hidden, msgの値の設定
    hidden.value = '';
    msg.textContent = '新しい計算式の入力'
    //onclickイベントの関数を削除
    button.removeEventListner('click', doCalcAction);
    button.removeEventListner('click', doDefaultAction);
    //buttonのonclickイベントにdoDefaultActionを設定
    button.addEventListener('click', doDefaultAction, false);
}
