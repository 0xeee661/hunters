import Link, { LinkProps } from 'next/link'
import s from './Button.module.scss'
import {
	AnchorHTMLAttributes,
	ButtonHTMLAttributes,
	DetailedHTMLProps,
} from 'react'

type ButtonProps = (
	| (LinkProps &
			DetailedHTMLProps<
				AnchorHTMLAttributes<HTMLAnchorElement>,
				HTMLAnchorElement
			>)
	| DetailedHTMLProps<
			ButtonHTMLAttributes<HTMLButtonElement>,
			HTMLButtonElement
	  >
) & {
	children: React.ReactNode
	className?: string
}

export const Button = ({ children, className, ...props }: ButtonProps) => {
	if ('href' in props) {
		return (
			<Link className={`${s.button} ${className || ''}`} {...props}>
				{children}
			</Link>
		)
	}

	return (
		<button className={`${s.button} ${className || ''}`} {...props}>
			{children}
		</button>
	)
}
