<?php
/**
 * Created by PhpStorm.
 * User: Damian Kolesnik <damian.kolesnik@gmail.com>
 * Date: 2018-09-15
 * Time: 23:15
 */

namespace AppBundle\Controller;


use AppBundle\Entity\Email;
use AppBundle\Form\EmailFormType;
use AppBundle\Service\EmailSender;
use Swift_Message;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class EmailSenderController extends Controller
{
    public function SendEmailAction(\Swift_Mailer $mailer, Request $request)
    {
        $emailInformation = new Email();
        $form = $this->createForm(EmailFormType::class, $emailInformation);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid())
        {
            $params = [];
            $params['user'] = $this->getParameter('mailer_user');
            $params['password'] = $this->getParameter('mailer_password');
            $params['addressee'] = $form->get('addressee')->getData();
            $params['subject'] = $form->get('subject')->getData();

            $message = new Swift_Message();
            $params['body'] = $this->renderView('email/body.html.twig',
                ['body' => $form->get('body')->getData()]
            );
            $emailSender = new EmailSender($params, $mailer, $message);
            $emailSender->SendEmail();
            return $this->redirectToRoute('email_success');
        }
        return $this->render('email/index.html.twig', array(
            'form' => $form->createView(),));
    }

    public function EmailSentNoticeAction(){
        return new Response('<html><body>Email was sent</body></html>');
    }

}