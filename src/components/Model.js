import { createApp } from 'vue';
import HintModel from './HintModal.vue';

export default {
    install(app) {
        const div = document.createElement('div');
        const instance = createApp(HintModel).mount(div);

        const show = (words) => {
            const modal = document.querySelector(`#${instance.$el.id}`);
            // 移除原有Popup
            if (modal)
                document.body.removeChild(modal);

            document.body.appendChild(instance.$el);

            instance.show(words);

        };

        app.provide('$show', show);
    }
};