import { describe, expect, test } from 'vitest'
import {Login, validateLogin, validatePassword} from './Login'
import { fireEvent, render, screen } from '@testing-library/react'

describe("Login form", () => {
    test("login form is rendered correct"), () => {
        render(<Login/>)
        const loginInput = screen.getByTestId('login')
        expect(loginInput).toBeDefined()
        const passwordInput = screen.getByTestId('password')
        expect(passwordInput).toBeDefined()
        const submitButton = screen.getByTestId('submit')
        expect(submitButton).toBeDefined()
    }

    test("login input is working"), () => {
        render(<Login/>)
        const loginInput : HTMLInputElement = screen.getByTestId('login')
        
        fireEvent.change(loginInput, { target: { value: 'login'}})
        expect(loginInput.value).toBe('login')
    }
    test("login input is working"), () => {
        render(<Login/>)
        const passwordInput : HTMLInputElement = screen.getByTestId('password')
        
        fireEvent.change(passwordInput, { target: { value: 'pass'}})
        expect(passwordInput.value).toBe('pass')
    }
    
    test("validate login function pass on correct login", () => {
        const correctLogin = "login"
        expect(validateLogin(correctLogin)).toBe(null)
    })
    test("validate login function fail on incorrect login", () => {
        const incorrectLogin = "loginloginlogin"
        expect(validateLogin(incorrectLogin)).not.toBe(null)
    })
    test("validate password function pass on correct password", () => {
        const correctPassword = "Password123"
        expect(validatePassword(correctPassword)).toBe(null)
    })
    test("validate password function fail on incorrect password", () => {
        const incorrectPassword = "password"
        expect(validatePassword(incorrectPassword)).not.toBe(null)
    })
})