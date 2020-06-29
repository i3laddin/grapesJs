import React, {useEffect, useState} from 'react';
//import 'grapesjs/dist/css/grapes.min.css';
import './css/grapes.min.css';
import grapesjs from 'grapesjs';
import gsWebpage from 'grapesjs-preset-webpage'
import gsCustome from 'grapesjs-custom-code';
import gsTap from 'grapesjs-tabs';

import {TablePluginRef} from "./Table/consts";
import addTablePlugin from './Table';
import { ChartPluginRef } from "./Chart/consts";
import addChartPlugin from './Chart';


const App = () => {

    const [pluginLoaded, setPluginLoaded] = useState(false);
    const [editor, setEditor] = useState(null);



    useEffect(() => {
        if (!pluginLoaded) {
            addTablePlugin();
            addChartPlugin();
            setPluginLoaded(true);
        }
        else if (!editor) {
          const e = grapesjs.init({
                color:'white',
                height: '100vh',
                width: 'auto',
                container: "#g",
                fromElement: true,
                plugins: [gsWebpage, gsCustome, gsTap, TablePluginRef, ChartPluginRef],
                storageManager: {
                type: 'remote',
                urlStore: 'http://173.249.14.149:3001/api/Dashboards/5ef370de14213070188a41eb/grapes?access_token=B6IES26pZSvpX4J8c8q4wmseASpRtmBOtvXzztH57NDDJXxO94qE7VbtJ7y718GZ',
                urlLoad: 'http://173.249.14.149:3001/api/Dashboards/5ef370de14213070188a41eb/grapes?access_token=B6IES26pZSvpX4J8c8q4wmseASpRtmBOtvXzztH57NDDJXxO94qE7VbtJ7y718GZ',
                autosave: false,
                autoload: true,
                contentTypeJson: true,
                storeComponents: true,
                allowScripts: 1,
                storeStyles: true,
                storeHtml: true,
                storeCss: true,
            },
            
            
                
          });


        }
      

      

    });


  return ( 

    <div id="g" className="h" />
    
    );
}

export default App;
