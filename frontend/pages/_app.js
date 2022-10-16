import '../styles/globals.css';
import "bootstrap/dist/css/bootstrap.min.css";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import ToastProvider from './helpers/ToasterService';


function MyApp({ Component, pageProps }) {
	return (
		<ToastProvider>
			<Component {...pageProps} />
		</ToastProvider>
	)
}

export default MyApp
