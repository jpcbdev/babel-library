import { Notification } from '../shared/utils';

export class ApiService {

    private static url = process.env.API_URL;

    static async get(path: string) {
        try {
            const query = await fetch(`${this.url}${path}`, {
                method: 'get',
            }).catch(() => { throw new Error('Error de conexión') });
            const response = await query.json();
            return response;
        } catch (error) {
            Notification.showError(error.message);
        }
    }

    static async post(path: string, body: object, formData?: boolean, showNotification = true): Promise<any> {
        try {
            const headers = {};
            if (!formData) { headers['Accept'] = 'application/json'; headers['Content-Type'] = 'application/json'; }
            const query = await fetch(`${this.url}${path}`,
                {
                    method: 'post',
                    headers,
                    body: formData ? body : JSON.stringify(body) as any,
                }).catch(() => { throw new Error('Error de conexión') });
            const response = await query.json();
            if ([400, 500].includes(response?.statusCode)) throw new Error(...response?.message);
            return response;
        } catch (error) {
            if (!showNotification) { throw new Error(error?.message ?? 'Error') }
            Notification.showError(error.message);
        }
    }

    static async put(path: string, body: object, formData?: boolean, showNotification = true): Promise<any> {
        try {
            const headers = {};
            if (!formData) { headers['Accept'] = 'application/json'; headers['Content-Type'] = 'application/json'; }
            const query = await fetch(`${this.url}${path}`,
                {
                    method: 'put',
                    headers,
                    body: formData ? body : JSON.stringify(body) as any,
                }).catch(() => { throw new Error('Error de conexión') });
            const response = await query.json();
            if ([400, 500].includes(response?.statusCode)) throw new Error(...response?.message);
            return response;
        } catch (error) {
            if (!showNotification) { throw new Error(error?.message ?? 'Error') }
            Notification.showError(error.message);
        }
    }

    static async delete(path: string, body: object, formData?: boolean): Promise<any> {
        try {
            const headers = {};
            if (!formData) { headers['Accept'] = 'application/json'; headers['Content-Type'] = 'application/json'; }
            const query = await fetch(`${this.url}${path}`,
                {
                    method: 'delete',
                    headers,
                    body: formData ? body : JSON.stringify(body) as any,
                }).catch(() => { throw new Error('Error de conexión') });
            const response = await query.json();
            return response;
        } catch (error) {
            Notification.showError(error.message);
        }
    }

}
