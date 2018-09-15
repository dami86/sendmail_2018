<?php
/**
 * Created by PhpStorm.
 * User: Damian Kolesnik <damian.kolesnik@gmail.com>
 * Date: 2018-09-15
 * Time: 23:01
 */

namespace AppBundle\Entity;


class Email
{
    private $subject;

    private $addressee;

    private $body;

    function getSubject() {
        return $this->subject;
    }

    function getAddressee() {
        return $this->addressee;
    }

    function getBody() {
        return $this->body;
    }

    function setSubject($subject) {
        $this->subject = $subject;
    }

    function setAddressee($addressee) {
        $this->addressee = $addressee;
    }

    function setBody($body) {
        $this->body = $body;
    }
}