const TelegramBot = require("node-telegram-bot-api");
const AnimalsController = require("./controllers/animalsControllers");

const token = "5328471940:AAESnUwLAM2LSoZhdDxjz0klRH84ZNevDZ8";

const bot = new TelegramBot(token, {polling: true});

bot.on('message', function(message)
{
    var chat_id = message.chat.id;
    var textSearch = message.text;
    const result = AnimalsController.filterByNameAnimal(textSearch);
    console.log(result);
    if(result.length> 0){
        const opts = {
            'caption': `Nombre: *${result[0].name}*  Peligros en su habitat: *${result[0].causasExtincion}*`,
            'parse_mode': 'markdown'
        };
        bot.sendPhoto(message.chat.id, result[0].img, opts);

    }else{
        console.log("No se encontro informacion");
        bot.sendMessage(message.chat.id, "No encontre información");
    }
//5328471940:AAESnUwLAM2LSoZhdDxjz0klRH84ZNevDZ8
});