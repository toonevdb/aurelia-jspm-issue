import {autoinject, bindable} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';
import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'animate.css/animate.css';

@autoinject
export class App {
    /**
     * Configures the router.
     *
     * @param {RouterConfiguration} config
     * @param {Router} router
     *
     * @memberOf App
     */
    public configureRouter(config: RouterConfiguration, router: Router) {
        config.options.pushState = true;
        config.options.root = '/';
        config.map([
            {
                route: '', redirect: '/index',
            },
            {
                route: 'index',
                moduleId: './resources/index',
            },
        ]);
    }

    public attached() {
        console.info('app attached call');
    }
}
