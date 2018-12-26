# chat application

## 機能
- ユーザーが部屋を作成（上限あり）
- 部屋内でテキストチャット、ボイスチャット（最大？人まで）が可能

### まずはテキストチャット機能のみを実装
- サイトトップを開くときに使用する名前を入力（モーダルウィンドウ） -> ヘッダーにログイン中の名前を表示
  - モーダルウィンドウはstoreのusernameが入っていない場合に表示されるようにする
  - 名前はローカルストレージに保存しておき、ローカルストレージに名前がある場合にはモーダルは開かない
  - ヘッダー、ログイン中の名前をクリックすると名前の変更が可能
- ルームバーの部屋名を選択すると、ログイン中の名前でその部屋に入室
  - 部屋に入室中のユーザー一覧を表示
  - 入室した時点で、最新のメッセージ10件を表示

## メモ

### client、server処理順に記載
#### user join
1. client: ルーム入室時にサーバーに送る情報(stateにroomを保存)
  - username
  - room
2. server: user入室情報を受信
  - socketに対して情報を保存
    - username、room
  - roomメンバーに対してjoinしたことを送信
3. client: ルームに入室中のuserが受信
  - joinメッセージを表示

#### user send message
1. client: ルームユーザーに対してメッセージを送信
  - textをserverに送信
2. server: 受け取ったメッセージをルームuserへ送信
  - socketに保存されているusername,roomを取り出す
  - roomに対して、受け取ったmessageとusernameを送信する
3. client: メッセージを表示
  - serverから送られてきたmessage, usernameをstateに保存し表示

### socket.ioでやり取りするメッセージの名前

#### `join`
- client -> server
- ユーザーがルームに入室した時に送られる。

#### `chat message`
- client <-> server
- ユーザー同士がやり取りするメッセージの情報

#### `user list`
- client <- server
- ルームにjoinした時にサーバーから送られる、**ルーム内にいる**ユーザーの情報。

#### `message list`
- client <- server
- ルームにjoinした時、そのルーム内の新着10件のメッセージが送られる。

#### `join user`
- client <- server
- ルーム内すべてのユーザーに対して送られる、入室したユーザーの情報

#### `delete room`
- client -> server
- ルームの削除
- そのルームに関するすべての情報を削除
- 条件
  - ルームマスターが削除ボタンを押す
  - 最後の1人がルームを退出する