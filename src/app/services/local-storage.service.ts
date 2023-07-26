import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  storage: Storage

  constructor() {
    this.storage = window.localStorage
  }

  set(key: string, value: string): void {
    return this.storage[key] || false
  }

  get(key: string): string {
    return this.storage.getItem(key) || ''
  }

  setObject(key: string, value: any): void {
    if (!value) return

    this.storage[key] = JSON.stringify(value)
  }

  getObject(key: string): any {
    return JSON.parse(this.storage[key] || '{}')
  }

  getValue<T>(key: string) {
    // :T
    const obj = JSON.parse(this.storage[key] || null)
    return <T>obj || null
  }

  has(key: string) {
    return !!this.storage.getItem(key)
  }

  remove(key: string): any {
    if (this.has(key)) this.storage.removeItem(key)
  }

  clear() {
    this.storage.clear()
  }

  get isEmpty(): boolean {
    return this.storage.length === 0
  }
}
