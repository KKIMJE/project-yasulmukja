package com.bitproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.bitproject.domain.AlcoholDetail;
import com.bitproject.service.AlcoholDetailService;

@RestController 
public class AlcoholDetailController {

  @Autowired
  AlcoholDetailService alcoholDetailService;

  @RequestMapping("/alcohol/list")
  public Object list(int pageSize, int pageNo) {
    return alcoholDetailService.list(pageSize, pageNo);
  }

  @RequestMapping("/alcohol/targetList")
  public Object targetList(int targetNo, int pageSize, int pageNo) {
    System.out.println("targetList() 호출됨");
    System.out.printf("targetNo: %d, pageSize: %d, pageNo: %d \n", targetNo, pageSize, pageNo);
    return alcoholDetailService.targetList(targetNo, pageSize, pageNo);
  }



  //  @RequestMapping("/alcohol/add")
  //  public Object add(AlcoholDetail alcoholDetail) {
  //    return alcoholDetailService.insert(alcoholDetail);
  //  }


  @RequestMapping("/alcohol/get")
  public Object get(int no) {
    AlcoholDetail alcoholDetail = alcoholDetailService.get(no);
    if (alcoholDetail == null) {
      return "";
    }
    return alcoholDetail;
  }

  @RequestMapping("/alcohol/size")
  public int size() {
    return alcoholDetailService.size();
  }

  @RequestMapping("/alcohol/targetSize")
  public int targetSize(int targetNo) {
    return alcoholDetailService.targetSize(targetNo);
  }


  //  @RequestMapping("/alcohol/update")
  //  public Object update(AlcoholDetail alcoholDetail) {
  //    return alcoholDetailService.update(alcoholDetail);
  //  }

  //  @RequestMapping("/alcohol/delete")
  //  public Object delete(int no) {
  //    return alcoholDetailService.delete(no);
  //  }
}
