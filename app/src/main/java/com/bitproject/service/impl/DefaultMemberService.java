package com.bitproject.service.impl;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.bitproject.dao.MemberDao;
import com.bitproject.domain.Member;
import com.bitproject.service.MemberService;

@Service
public class DefaultMemberService implements MemberService {

  SqlSessionFactory sqlSessionFactory;

  public DefaultMemberService(SqlSessionFactory sqlSessionFactory) {
    this.sqlSessionFactory = sqlSessionFactory;
  }

  @Autowired
  MemberDao memberDao;

  @Override
  public int add(Member member) {
    SqlSession session = sqlSessionFactory.openSession();
    MemberDao memberDao = session.getMapper(MemberDao.class);
    return memberDao.insert(member);
  }

  @Override
  public Member get(String email, String password) {
    SqlSession session = sqlSessionFactory.openSession();
    MemberDao memberDao = session.getMapper(MemberDao.class);
    return memberDao.findByEmailAndPassword(email, password);
  }

  @Override
  public Member get(String email) {
    SqlSession session = sqlSessionFactory.openSession();
    MemberDao memberDao = session.getMapper(MemberDao.class);
    return memberDao.findByEmail(email);
  }

}

