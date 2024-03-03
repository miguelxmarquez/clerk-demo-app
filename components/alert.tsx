export default function Alert() {
	return (
		<div className="py-2 text-center text-sm">
			<>
				The source code for this blog is{' '}
				<a
					href={`https://github.com/miguelxmarquez/clerk-demo-app`}
					className="underline hover:text-success duration-200 transition-colors"
				>
					available on GitHub
				</a>
				.
			</>
		</div>
	)
}
