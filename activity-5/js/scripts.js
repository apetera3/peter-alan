(function() {

var data = [

        {

        name:'1. Settings Sync',

        description:'The Setting Sync extension synchronizes settings, snippets, themes etc.',

        author: 'Shan Khan',

        url: 'marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync',

        downloads: 1662209,

        stars: 2456,

        price:10.50,

        selector: 'p1'

        },

        {

        name:'2. Shopify Liquid Template Snippets',

        description:'This extension includes various Liquid snippets to make developing themes faster.',

        author: 'Franky Lau',

        url: 'https://marketplace.visualstudio.com/items?itemName=killalau.vscode-liquid-snippets',

        downloads: 120525,

        stars: 4,

        price:6.75,

        selector: 'p2'  

        }

    ];

    //(VSCode)extension constructor funciton

    function Package(data){

        this.name = data.name;

        this.description = data.description;

        this.author = data.author;

        this.url = data.url;

        this.downloads = data.downloads;

        this.stars = data.stars;

        this.selector = data.selector;



        this.getFormattedDownloads = function(){

            return this.downloads.toLocaleString();

        };

        this.getFormattedStars = function(){

            return this.stars.toLocaleString();

        };

    }

    /*********************

     * Utility Functions*

     ********************/



    var getTodaysDate = function (){

        var today = new Date();

        return today.toDateString();

    };



    //Returns DOM element by ID

    var getEl = function (id){

        return document.getElementById(id);

    };



    //Writes the package object's data to the appropriate DOM elements

    var writePackageInfo = function (package){

    //get reference to DOM elements

        var selector = package.selector,

            nameEl = getEl(selector + '-name'),

            descEl = getEl(selector +'-description'),

            authEl = getEl(selector + '-author'),

            downloadEl = getEl(selector + '-downloads'),

            starsEl = getEl(selector + '-stars');

        //write package to the DOM elements

        nameEl.textContent = package.name;

        descEl.textContent = package.description;

        authEl.textContent = package.author;

        downloadEl.textContent = package.getFormattedDownloads();

        starsEl.textContent = package.getFormattedStars();

    };

    //Write date

    var dateEl = getEl('date');

    dateEl.textContent = getTodaysDate();



    //Write package data one by one

    var settingSync = new Package(data[0]);

    var liquidTemplate = new Package(data[1]);

    writePackageInfo(settingSync);

    writePackageInfo(liquidTemplate);



}());