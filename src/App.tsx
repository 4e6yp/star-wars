import '@mantine/core/styles.css';
import { Notifications } from '@mantine/notifications';
import '@mantine/notifications/styles.css';

import type { ReactElement } from 'react';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Gallery = lazy(async () => import('pages/Gallery/'))
const Details = lazy(async () => import('pages/Details/'))

export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<Notifications />
			<Suspense fallback={null}>
				<Routes>
					<Route path='/' element={<Gallery />} />
					<Route path=':characterId' element={<Details />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	)
}
