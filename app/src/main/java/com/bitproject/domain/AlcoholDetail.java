package com.bitproject.domain;

public class AlcoholDetail {
  int no;
  int alcoholTypeNo;
  String name;
  float degree;
  String brand;
  String origin;
  int volume;
  String characteristic;
  String img;

  @Override
  public String toString() {
    return "AlcoholDetail [no=" + no + ", alcoholTypeNo=" + alcoholTypeNo + ", name=" + name
        + ", degree=" + degree + ", brand=" + brand + ", origin=" + origin + ", volume=" + volume
        + ", characteristic=" + characteristic + ", img=" + img + "]";
  }
  public int getNo() {
    return no;
  }
  public void setNo(int no) {
    this.no = no;
  }
  public int getAlcoholTypeNo() {
    return alcoholTypeNo;
  }
  public void setAlcoholTypeNo(int alcoholTypeNo) {
    this.alcoholTypeNo = alcoholTypeNo;
  }
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }
  public float getDegree() {
    return degree;
  }
  public void setDegree(float degree) {
    this.degree = degree;
  }
  public String getBrand() {
    return brand;
  }
  public void setBrand(String brand) {
    this.brand = brand;
  }
  public String getOrigin() {
    return origin;
  }
  public void setOrigin(String origin) {
    this.origin = origin;
  }
  public int getVolume() {
    return volume;
  }
  public void setVolume(int volume) {
    this.volume = volume;
  }
  public String getCharacteristic() {
    return characteristic;
  }
  public void setCharacteristic(String characteristic) {
    this.characteristic = characteristic;
  }
  public String getImg() {
    return img;
  }
  public void setImg(String img) {
    this.img = img;
  }


}