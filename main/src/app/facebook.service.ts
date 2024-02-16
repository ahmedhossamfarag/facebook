import { Injectable } from '@angular/core';
import { UserData } from './user-data';
import { UserRelation } from './user-relation';
import { UserPublished } from './user-published';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class FacebookService {
  url = 'http://localhost:3000'
  constructor() { }

  async getUser(username : string) : Promise<UserData>{
    var u = await this.fromserver<UserData>(`users?name=${username}`)
    return u.length > 0 ? u[0] : {name : '', profileImage : ''}
  }

  async getUsers(): Promise<UserData[]>{
    return await this.fromserver<UserData>('users')
  }

  async getFriends(username : string){
    return (await this.fromserver<UserRelation>('friends')).filter(u => u.username_1 == username || u.username_2 == username)
  }

  async getRequests(username : string){
    return await  this.fromserver<UserRelation>(`requests?username_2=${username}`)
  } 

  async getSuggestions(username : string){
    return await this.fromserver<UserRelation>(`suggestions?username_1=${username}`)
  }

  async getPublished(username : string){
    return await this.fromserver<UserPublished>('published')
  }

  async getVideos(username : string){
    return (await this.getPublished(username)).filter(p => p.content.includes('{"video":"'))
  }

  async getProducts() : Promise<Product[]>{
    return await this.fromserver<Product>('products')
  }

  async fromserver<T>(table : string) : Promise<T[]>{
    return (await fetch(`${this.url}/${table}`)).json() ?? []
  }
}
