'use client'

import { useUser } from '@clerk/nextjs'
import Alert from '@/components/alert'

export default function Home() {
	const { isLoaded, isSignedIn, user } = useUser()

	if (!isLoaded || !isSignedIn) {
		return (
			<div className="p-10 content-center">
				<Alert />
				<h1 className="text-4xl mb-4">Home</h1>
				<a href={`/dashboard`} type="button" className="m-5 float-left btn info">
					Access
				</a>
				<a href={`/about`} type="button" className="m-5 float-left btn info">
					About
				</a>
			</div>
		)
	} else {
		return (
			<div className="p-10 content-center">
				<Alert />
				<h1 className="text-4xl mb-4">Home</h1>
				<h1>Hello, {user.fullName} welcome to Clerk</h1>
				<a href={`/dashboard`} type="button" className="m-5 float-left btn info">
					Go to Dashboard
				</a>
				<a href={`/about`} type="button" className="m-5 float-left btn info">
					About
				</a>
			</div>
		)
	}
}
