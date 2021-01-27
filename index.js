const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'ODAzODQ3NTEzNTA4NDEzNDcw.YBDvVQ.nA14uzDML7dNbmnqlc0lxNM1g6I';


client.on('ready', () => {
    console.log('DISCORD BOT LOGIN');
});


client.on('message', (message) => {
    if(message.content === ':help') {
        message.reply('명령어 모음 ;;팁/;;제작자/;;트레이드/;;포이즌이란')
    }
});


client.on('message', (message) => {
    if(message.content === ';;제작자') {
        message.reply('Workclock#3715 으로 갠디엠주세요')
    }
});


client.on('message', (message) => {
    if(message.content === ';;트레이드') {
        message.reply('트레이드 시스템은 프리미엄을 소지한 사용자가 Limited/Limited U 아이템 그리고 Robux를 다른 사용자와 거래할 수 있는 기능이예요 :> https://en.help.roblox.com/hc/ko/articles/203313310-%EA%B1%B0%EB%9E%98-%EC%8B%9C%EC%8A%A4%ED%85%9C 여기에 더 자세히 나와있어요')
    }
});


client.on('message', (message) => {
    if(message.content === ';;포이즌이란') {
        message.reply('포이즌이란 불법적인 경로에서 얻은 아이템을 의미하는데 이경우에는 굉장히 위험하고 해킹당한계정에서 신고를 하게되면 관련계정들은 모두 정지를 당하기때문에 바로 팔거나 트레이드를해서 회피를 해야해요')
    }
});


client.on('message', (message) => {
    if(message.content === ';;팁') {
        message.reply('트레이드에 대해서 잘모르는 경우는 rolimons를 이용하는 거예요 https://www.rolimons.com/')
    }
});

client.login(token);