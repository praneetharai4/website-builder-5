


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
        sectors: [
            {
                name: "Dimension",
                open: false,
                buildProps: ["width", "min-height", "padding"],
                properties: [
                    {
                        type: "integer",
                        name: "The Width",
                        property: "width",
                        units: ["px", "%", "rem"],
                        defaults: "auto",
                        min: 0,
                    },
                ],
            },
        ],

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
    
    plugins: ["gjs-blocks-basic"],
    pluginsOpts: {
        "gjs-blocks-basic": {},

    },
    // plugins: ['grapesjs-plugin-forms'],
    // pluginsOpts: {
    //     'grapesjs-plugin-forms':{}
    // },
    
   
});
editor.Commands.add('set-device-desktop', {
    run: (editor) => editor.setDevice('Desktop'),
  });
  editor.Commands.add('set-device-mobile', {
    run: (editor) => editor.setDevice('Mobile'),
  });

   
//   function code()
//   {
//        var demo = editor.getHtml();
//        var democss = editor.getCss();
//        var demojs = editor.getJs();
//        alert(demo);
//        alert(democss);
//        alert(demojs);
//   }
   function code()
   {
       const fs = require('fs')
       const demo = editor.getHtml();
        fs.writeFile('/Users/praneethadrai/Documents/Praneetha/React/ex.txt',demo, err => {
            if(err)
            {
                console.error(err);
            }
        }
        );
       
   }