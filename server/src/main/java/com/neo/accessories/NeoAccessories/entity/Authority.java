package com.neo.accessories.NeoAccessories.entity;

import com.neo.accessories.NeoAccessories.dto.AuthorityName;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "user_role")
public class Authority {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "authority_seq")
    @SequenceGenerator(name = "authority_seq", sequenceName = "authority_seq", allocationSize = 1)
    private Long id;

    @Column(name = "name", length = 50)
    @NotNull
    @Enumerated(EnumType.STRING)
    private AuthorityName name;
//
//    @ManyToMany(mappedBy = "authorities", fetch = FetchType.LAZY)
//    private List<CustomerDao> users;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public AuthorityName getName() {
        return name;
    }

    public void setName(AuthorityName name) {
        this.name = name;
    }

//    public List<CustomerDao> getUsers() {
//        return users;
//    }
//
//    public void setUsers(List<CustomerDao> users) {
//        this.users = users;
//    }
}