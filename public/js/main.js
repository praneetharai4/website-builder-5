const navbar = $("#navbar");
const mainContent = $("#main-content");
const panelTopBar = $("#main-content > .navbar-light");
const editor = grapesjs.init({
  container: "#editor",
  fromElement: true,
  width: "auto",
  storageManager: false,

  blockManager: {
      appendTo: "#blocks",
      // blocks: [
      //     {
      //       id: 'form',
      //       label: 'Form',
      //       media: `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
      //           <path d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z" />
      //       </svg>`,
      //       // Use `image` component
      //       content: { type: 'text' },
      //       // The component `image` is activatable (shows the Asset Manager).
      //       // We want to activate it once dropped in the canvas.
      //       activate: true,
      //       // select: true, // Default with `activate: true`
      //     }
      //   ],
      
        
  },
  layerManager: {
      appendTo: "#layer-container",
  },
  styleManager: {
      appendTo: "#style-view",
      // sectors: [
      //     {
      //         name: "Dimension",
      //         open: false,
      //         buildProps: ["width", "min-height", "padding"],
      //         properties: [
      //             {
      //                 type: "integer",
      //                 name: "The Width",
      //                 property: "width",
      //                 units: ["px", "%", "rem"],
      //                 defaults: "auto",
      //                 min: 0,
      //             },
      //         ],
      //     },
      // ],
      sectors: [{
          name: 'General',
          properties:[
            {
              extend: 'float',
              type: 'radio',
              default: 'none',
              options: [
                { value: 'none', className: 'fa fa-times'},
                { value: 'left', className: 'fa fa-align-left'},
                { value: 'right', className: 'fa fa-align-right'}
              ],
            },
            'display',
            { extend: 'position', type: 'select' },
            'top',
            'right',
            'left',
            'bottom',
          ],
        }, {
            name: 'Dimension',
            open: false,
            properties: [
              'width',
              {
                id: 'flex-width',
                type: 'integer',
                name: 'Width',
                units: ['px', '%'],
                property: 'flex-basis',
                toRequire: 1,
              },
              'height',
              'max-width',
              'min-height',
              'margin',
              'padding'
            ],
          },{
            name: 'Typography',
            open: false,
            properties: [
                'font-family',
                'font-size',
                'font-weight',
                'letter-spacing',
                'color',
                'line-height',
                {
                  extend: 'text-align',
                  options: [
                    { id : 'left',  label : 'Left',    className: 'fa fa-align-left'},
                    { id : 'center',  label : 'Center',  className: 'fa fa-align-center' },
                    { id : 'right',   label : 'Right',   className: 'fa fa-align-right'},
                    { id : 'justify', label : 'Justify',   className: 'fa fa-align-justify'}
                  ],
                },
                {
                  property: 'text-decoration',
                  type: 'radio',
                  default: 'none',
                  options: [
                    { id: 'none', label: 'None', className: 'fa fa-times'},
                    { id: 'underline', label: 'underline', className: 'fa fa-underline' },
                    { id: 'line-through', label: 'Line-through', className: 'fa fa-strikethrough'}
                  ],
                },
                'text-shadow'
            ],
          },{
            name: 'Decorations',
            open: false,
            properties: [
              'opacity',
              'border-radius',
              'border',
              'box-shadow',
              'background', // { id: 'background-bg', property: 'background', type: 'bg' }
            ],
          },
          {
              name: 'Stack',
              type: 'stack',
              property: 'text-shadow',
              label: 'Stack type',
              // Additional props
              properties: [
                { type: 'number', units: ['px'], default: '0', property: 'x' },
                { type: 'number', units: ['px'], default: '0', property: 'y' },
                { type: 'number', units: ['px'], default: '0', property: 'blur' },
                { type: 'color', default: 'black', property: 'color' },
              ]
            },
          {
            name: 'Extra',
            open: false,
            buildProps: [
              'transition',
              'perspective',
              'transform'
            ],
          },{
            name: 'Flex',
            open: false,
            properties: [{
              name: 'Flex Container',
              property: 'display',
              type: 'select',
              defaults: 'block',
              list: [
                { value: 'block', name: 'Disable'},
                { value: 'flex', name: 'Enable'}
              ],
            },{
              name: 'Flex Parent',
              property: 'label-parent-flex',
              type: 'integer',
            },{
              name: 'Direction',
              property: 'flex-direction',
              type: 'radio',
              defaults: 'row',
              list: [{
                value: 'row',
                name: 'Row',
                className: 'icons-flex icon-dir-row',
                title: 'Row',
              },{
                value: 'row-reverse',
                name: 'Row reverse',
                className: 'icons-flex icon-dir-row-rev',
                title: 'Row reverse',
              },{
                value: 'column',
                name: 'Column',
                title: 'Column',
                className: 'icons-flex icon-dir-col',
              },{
                value: 'column-reverse',
                name: 'Column reverse',
                title: 'Column reverse',
                className: 'icons-flex icon-dir-col-rev',
              }],
            },{
              name: 'Justify',
              property: 'justify-content',
              type: 'radio',
              defaults: 'flex-start',
              list: [{
                value: 'flex-start',
                className: 'icons-flex icon-just-start',
                title: 'Start',
              },{
                value: 'flex-end',
                title: 'End',
                className: 'icons-flex icon-just-end',
              },{
                value: 'space-between',
                title: 'Space between',
                className: 'icons-flex icon-just-sp-bet',
              },{
                value: 'space-around',
                title: 'Space around',
                className: 'icons-flex icon-just-sp-ar',
              },{
                value: 'center',
                title: 'Center',
                className: 'icons-flex icon-just-sp-cent',
              }],
            },{
              name: 'Align',
              property: 'align-items',
              type: 'radio',
              defaults: 'center',
              list: [{
                value: 'flex-start',
                title: 'Start',
                className: 'icons-flex icon-al-start',
              },{
                value: 'flex-end',
                title: 'End',
                className: 'icons-flex icon-al-end',
              },{
                value: 'stretch',
                title: 'Stretch',
                className: 'icons-flex icon-al-str',
              },{
                value: 'center',
                title: 'Center',
                className: 'icons-flex icon-al-center',
              }],
            },{
              name: 'Flex Children',
              property: 'label-parent-flex',
              type: 'integer',
            },{
              name: 'Order',
              property: 'order',
              type: 'integer',
              defaults: 0,
              min: 0
            },{
              name: 'Flex',
              property: 'flex',
              type: 'composite',
              properties  : [{
                name: 'Grow',
                property: 'flex-grow',
                type: 'integer',
                defaults: 0,
                min: 0
              },{
                name: 'Shrink',
                property: 'flex-shrink',
                type: 'integer',
                defaults: 0,
                min: 0
              },{
                name: 'Basis',
                property: 'flex-basis',
                type: 'integer',
                units: ['px','%',''],
                unit: '',
                defaults: 'auto',
              }],
            },{
              name: 'Align',
              property: 'align-self',
              type: 'radio',
              defaults: 'auto',
              list: [{
                value: 'auto',
                name: 'Auto',
              },{
                value: 'flex-start',
                title: 'Start',
                className: 'icons-flex icon-al-start',
              },{
                value   : 'flex-end',
                title: 'End',
                className: 'icons-flex icon-al-end',
              },{
                value   : 'stretch',
                title: 'Stretch',
                className: 'icons-flex icon-al-str',
              },{
                value   : 'center',
                title: 'Center',
                className: 'icons-flex icon-al-center',
              }],
            }]
          }
        ]

  },
  traitManager: {
      appendTo: "#trait-container",
    },
  selectorManager: {
      appendTo: "#style-view",
    },
  panels: {
      defaults: [
          {
              id: "basic-actions",
              el: ".panel__basic-action",
              buttons: [
                  {
                      id: "visibility",
                      active: true,
                      className: "btn-toggle-borders",
                      label: '<i class="bi bi-border"></i>',
                      command: "sw-visibility",
                  },
                  
                  


              ],


          },
          {
            id: "editor-actions",
            el: ".panel__editor",
            buttons: [
              {
                id: "saveDb",
                className: "fa fa-paper-plane btn-save",
                command: "saveDb",
              },
              {
                id: "cmd-clear",
                className: "fa fa-trash",
                command: "cmd-clear",
              },
              {
                id: "undo",
                className: "fa fa-undo",
                command: "undo",
              },
              {
                id: "redo",
                className: "fa fa-repeat",
                command: "redo",
              },
              {
                id: "export",
                className: "fa fa-download",
                command: "export",
              },
              {
                    id: "preview",
                    className: "fa fa-eye",
                    command: "preview",
                },
            ],
          },
          {
              id: "panel-devices",
              el: ".panel__devices",
              buttons: [
                  {
                      id: "device-desktop",
                      label: "<i class='bi bi-laptop'></i>",
                      command: "set-device-desktop",
                      active: true,
                      togglable: false,

                  },
                  {
                      id: "device-mobile",
                      label: "<i class='bi bi-phone'></i>",
                      command: "set-device-mobile",
                      togglable: false,
                    


                  },
              ],

          },
      ],
  },
  deviceManager: {
      devices: [{
          name: "Desktop",
          width: "",
      },
      {
          name: "Mobile",
          width: "320px",
          widthMedia: "480px",

      },
      ],
  },
  
  
  // plugins: ["gjs-blocks-basic","grapesjs-plugin-forms","grapesjs-style-bg","grapesjs-tabs"],
  // pluginsOpts: {
  //     "gjs-blocks-basic": {},
  //     "grapesjs-plugin-forms":{},
  //     "grapesjs-style-bg":{},
      
  //     "grapesjs-tabs":{}

  // },
  plugins: ["gjs-blocks-basic","grapesjs-blocks-bootstrap4"],
  pluginsOpts: {
      "gjs-blocks-basic": {},
      "grapesjs-blocks-bootstrap4":{}
  },
  canvas: {
      styles: [
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'
      ],
      scripts: [
        'https://code.jquery.com/jquery-3.3.1.slim.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js'
      ],
    }
  
 
});
editor.Commands.add('set-device-desktop', {
  run: (editor) => editor.setDevice('Desktop'),
});
editor.Commands.add('set-device-mobile', {
  run: (editor) => editor.setDevice('Mobile'),
});
editor.Commands.add('preview',{ run: (editor)=>editor.preview.Manager.preview()

});

editor.on("run:preview",()=>{
  editor.stopCommand("sw-visibility");
  navbar.removeClass("sidebar");
  mainContent.removeClass("main-content");
  panelTopBar.addClass("d-none");
});
editor.on("stop:preview",()=>{
  editor.runCommand("sw-visibility")
  navbar.addClass("sidebar");
  mainContent.addClass("main-content");
  panelTopBar.removeClass("d-none");
  
});

editor.Commands.add("cmd-clear", {
  run: (editor) => {
    editor.DomComponents.clear();
    editor.CssComposer.clear();
  },
});

//Undo
editor.Commands.add("undo", {
  run: (editor) => editor.UndoManager.undo(),
});

// Redo
editor.Commands.add("redo", {
  run: (editor) => editor.UndoManager.redo(),
});

editor.Commands.add("export", {
  run: (editor) => editor.runCommand("gjs-export-zip"),
});

 
  // function code()
  // {
  //      var demo = editor.getHtml();
  //      var democss = editor.getCss();
  //      var demojs = editor.getJs();
  //      alert(demo);
  //      alert(democss);
  //      alert(demojs);
  // }
//    function code()
//    {
//        const fs = require('fs')
//        const demo = editor.getHtml();
//         fs.writeFile('/Users/praneethadrai/Documents/Praneetha/React/ex.txt',demo, err => {
//             if(err)
//             {
//                 console.error(err);
//             }
//         }
//         );
     
//    }

function code()
  {


       var demo ='<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head> '+editor.getHtml()+'</html>';
      //  var democss = editor.getCss();
      //  var demojs = editor.getJs();
    //    alert(demo);
       var userInfo = {'demo':demo}
       $.ajax ({
        contentType: 'application/json',
        url: "/elementContent",
        method: 'POST',
        data:JSON.stringify(userInfo),
        dataType: "json",
        success:function(data){
            console.log(data);
            alert(data);
        },
        error: function(data){
            if(data.statusText!="OK")
            alert('error: '+data.responseText);
            else 
            alert (data.responseText);
        }
    })}
