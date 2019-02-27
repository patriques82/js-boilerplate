import App from './App';

describe('App', () => {
    it('Runs and passes', () => {
        const app = new App();
        expect(app.run()).toBe('its running...');
    });
});
