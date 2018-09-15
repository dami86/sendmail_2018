<?php
/**
 * Created by PhpStorm.
 * User: Damian Kolesnik <damian.kolesnik@gmail.com>
 * Date: 2018-09-15
 * Time: 23:12
 */

namespace AppBundle\Service;


use Swift_Mailer;
use Swift_Message;

class EmailSender {
    private $params;
    private $mailer;
    private $message;

    function __construct($params, Swift_Mailer $mailer, Swift_Message $message)
    {
        $this->message = $message;
        $this->mailer = $mailer;
        $this->params = $params;
    }

    public function SendEmail()
    {
        $this->message->setSubject($this->params['subject'])
            ->setFrom($this->params['user'])
            ->setTo($this->params['addressee'])
            ->setBody($this->params['body']);
        $this->mailer->send($this->message);
    }

}