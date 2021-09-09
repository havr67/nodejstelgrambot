const TelegramApi = require('node-telegram-bot-api');
const { REPL_MODE_SLOPPY } = require('repl');

const BOT_TOKEN = '';

const bot = new TelegramApi(BOT_TOKEN, {polling:true})

const bot_name = '@Khavr_test_bot';

bot.setMyCommands([
    {command: `/start`, description: 'Welcome to bot'},
    {command: `/help`, description: 'Help'},
    {command: `/game`, description: 'Game'}
]);

const start_bot = async () => {
    bot.on('message', async msg=>{
        const text = msg.text;
        const chat_id = msg.chat.id;
        const chat_type = msg.chat.type;
        console.log(msg);
        if(chat_type === 'supergroup'){
            if(text === '/start' + bot_name){
                return x = if_start_commad(chat_id);
            }
            if(text === '/help' + bot_name){
                return x = if_help_command(chat_id);
            }
            if(text === '/music' + bot_name){
                return x = if_music_commad(chat_id);
            } 
        }
        if(text === '/start'){
            return x = if_start_commad(chat_id);
        }
        if(text === '/help'){
            return x = if_help_command(chat_id);
        }
        if(text === '/music'){
            return x = if_music_commad(chat_id);
        } 
        return x = if_wrong_input(chat_id);
    })
}

function if_start_commad(chat_id){
    return bot.sendMessage(chat_id, "Commands",{
        reply_markup: {
         resize_keyboard: true,
         keyboard: [
             [
                 {text: '/help'},
                 {text: '/info'},
             ],
             [
                 {text: '/music'},
                 {text: '/hit'},
             ]
         ]
     }
    });
}

function if_music_commad(chat_id){
    return bot.sendAudio(chat_id, 'https://music.yandex.ru/album/15776711/track/83662082');
} 

function if_help_command(chat_id){
    return bot.sendMessage(chat_id, "This is a test bot dont be harsh",{
        reply_markup: {
         inline_keyboard:[
             [
                {
                    text: 'music',
                    url: 'https://t.me/joinchat/ViFPs-E4O7uKXvab'
                }
             ]
         ]
     }
    });
}

function if_wrong_input(chat_id){
    return bot.sendMessage(chat_id, 'I dont undertand sorry');
}

start_bot();
