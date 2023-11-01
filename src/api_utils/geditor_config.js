import grapesjs from "grapesjs";
import gjsBlockBasic from "grapesjs-blocks-basic";
import $ from "jquery";
import grapesjsBlockBootstrap from "grapesjs-blocks-bootstrap4";
import grapesjsPluginExport from "grapesjs-plugin-export";
import grapesjsStyleBg from "grapesjs-style-bg";
import tailwindComponent from "../plugins/tailwind/index";
import swiperComponent from "../plugins/swiper/index";
import { layerManager, selectorManager, styleManager, traitManager, panels, deviceManager, addEditorCommand, storageSetting, scripts, styles, toggleSidebar, } from "./geditor_utils";

const geditorConfig = (assets, pageId) => {
    $(".panel__devices").html("");
    $(".panel__basic__actions").html("");
    $(".panel__editor").html("");
    $("#blocks").html("");
    $("#styles-container").html("");
    $("#layers-container").html("");
    $("#trait-container").html("");

     // Content for Preview
    const navbar = $("#navbar");
    const mainContent = $("#main-content");
    const panelTopBar = $("#main-content > .navbar-light");

    const editor = grapesjs.init({
        container: "#editor",
        blockManager: {
          appendTo: "#blocks"
        },
        styleManager: styleManager,
        layerManager: layerManager,
        traitManager: traitManager,
        selectorManager: selectorManager,
        panels: panels,
        deviceManager: deviceManager,
        //assetManager: { assets: assets, upload: false },
        assetManager: {
          upload: false,
          assets: [
            'https://via.placeholder.com/350x250/78c5d6/fff/image1.jpg',
            'https://via.placeholder.com/350x250/459ba8/fff/image2.jpg',
            'https://via.placeholder.com/350x250/79c267/fff/image3.jpg',
          ],
        },
        storageManager: storageSetting(pageId),
        plugins: [gjsBlockBasic, tailwindComponent, swiperComponent, grapesjsBlockBootstrap, grapesjsPluginExport, grapesjsStyleBg,],
        pluginsOpts: {
          gjsBlockBasic: {},
          tailwindComponent: {},
          swiperComponent: {},
          grapesjsBlockBootstrap: {},
          grapesjsPluginExport: {},
          grapesjsStyleBg: {},
        },
        canvas: {
            styles: styles,
            scripts: scripts,
        },
    });  
    
    addEditorCommand(editor);

  //preview
  editor.on("run:preview", () => {
    // This will be used to hide border
    editor.stopCommand("sw-visibility");
    // This will hide the sidebar view
    //not using as it is working
    //navbar.removeClass("sidebar");
    // This will make the main-content to be full width
    mainContent.removeClass("main-content");
    // This will hide top panel where we have added the button
    panelTopBar.addClass("d-none");
  });

  editor.on("stop:preview", () => {
    // This event is reverse of the above event.
    editor.runCommand("sw-visibility");
    //not using as it is working
    //navbar.addClass("sidebar");
    mainContent.addClass("main-content");
    panelTopBar.removeClass("d-none");
  });

  editor.on("component:selected", (component) => {
    toggleSidebar(!!component);
  });

  setTimeout(() => {
    let categories = editor.BlockManager.getCategories();
    categories.each((category) => category.set("open", false));
  }, 1000);
};

export default geditorConfig;