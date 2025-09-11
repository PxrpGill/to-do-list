/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
	console.log('geo', (request as any).geo);
	console.log('header country', request.headers.get('x-vercel-ip-country'));
}
