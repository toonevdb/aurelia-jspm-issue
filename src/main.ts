import {load} from 'aurelia-environment';
import {EventAggregator} from 'aurelia-event-aggregator';
import {Aurelia, LogManager} from 'aurelia-framework';
import {I18N} from 'aurelia-i18n';
import {ConsoleAppender} from 'aurelia-logging-console';
import {AppRouter} from 'aurelia-router';
import {ValidationMessageProvider} from 'aurelia-validation';
import * as Backend from 'i18next-xhr-backend';

export function configure(aurelia: Aurelia) {
  load().then(() => {
    aurelia.use
      .standardConfiguration();
      //.feature('resources');

    aurelia.use.developmentLogging();

    aurelia.use
      .plugin('aurelia-dialog')
      .plugin('aurelia-validation')
      .plugin('aurelia-animator-css');

    // Plugin requires "allowSyntheticDefaultImports": true in tsconfig which i don't like, don't know yet why
    // There are some usefull other i18n plugins like caching to local storage (http://i18next.com/docs/options/)
    aurelia.use.plugin('aurelia-i18n', (instance) => {
      instance.i18next.use(Backend);

      return instance.setup({
        backend: {
          loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
        lng: 'nl',
        attributes: ['t', 'i18n'],
        fallbackLng: 'en',
        debug: true,
      }).then(() => {
        const router = aurelia.container.get(AppRouter);
        const eventAggregator = aurelia.container.get(EventAggregator);

        router.transformTitle = (title) => instance.tr(title);
        eventAggregator.subscribe('i18:locale:changed', () => {
          router.updateTitle();
        });
      });
    });

    // TODO: I18N log missing keys somewhere

    const i18n = aurelia.container.get(I18N);
    ValidationMessageProvider.prototype.getMessage = function(key) {
      const translation = i18n.tr(`errorMessages.${key}`);
      return this.parser.parseMessage(translation);
    };

    ValidationMessageProvider.prototype.getDisplayName = (propertyName, displayName) => {
      if (displayName !== null && displayName !== undefined) {
        return i18n.tr(displayName);
      }
      return i18n.tr(propertyName);
    };

    aurelia.use.plugin('aurelia-tabbed');

    aurelia.start().then(() => {
      aurelia.setRoot();
    });
  });
}
