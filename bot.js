const Discord = require('discord.js');

const Util = require('discord.js');
//n3k4a جميع الحقوق معفوظه لي //n3k4a جميع الحقوق معفوظه لي 
const getYoutubeID = require('get-youtube-id');

const fetchVideoInfo = require('youtube-info');

const YouTube = require('simple-youtube-api');//n3k4a جميع الحقوق معفوظه لي 

const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
//n3k4a جميع الحقوق معفوظه لي 
const queue = new Map();

const ytdl = require('ytdl-core');//n3k4a جميع الحقوق معفوظه لي 

const fs = require('fs');
//n3k4a جميع الحقوق معفوظه لي 
const gif = require("gif-search");

const client = new Discord.Client({disableEveryone: true});

const prefix = "=";//n3k4a جميع الحقوق معفوظه لي //n3k4a جميع الحقوق معفوظه لي //n3k4a جميع الحقوق معفوظه لي //n3k4a جميع الحقوق معفوظه لي 
/////////////////////////
////////////////////////
const music = new Music(client, {
    prefix: ".", // Prefix for the commands.
    youtubeKey: 'AIzaSyApvbcgvYRGulf1I1Ffjfhr2K-S6TX0e9w',
    global: false,            // Non-server-specific queues.
    maxQueueSize: 50,        // Maximum queue size of 25.
    playCmd: 'p',        // Sets the name for the 'play' command.
    playAlts: ["play", 'paly'],
    volumeCmd: 'vol',     // Sets the name for the 'volume' command.
    thumbnailType: 'high',
    leaveCmd: 'stop',      // Sets the name for the 'leave' command.
    anyoneCanSkip: true,
    disableLoop: false,
    searchCmd: 'search',
    requesterName: true,
    inlineEmbeds: true,	 
    queueCmd: 'q',
    queueAlts: ['queue', 'queueue'],
    pauseCmd: 'pause',
    resumeCmd: 'resume',
    skipCmd: 's',
    skipAlts: ["skip", "skipp"],
    loopCmd: 'loop',
    enableQueueStat: true,
  });

client.login(process.env.BOT_TOKEN);
