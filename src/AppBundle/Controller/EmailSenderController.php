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
use Swift_Message;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class EmailSenderController extends Controller
{
    public function SendEmailAction( Request $request)
    {
        $emailInformation = new Email();
        $form = $this->createForm(EmailFormType::class, $emailInformation);
        $form->handleRequest($request);

        return $this->render('email/index.html.twig', array(
            'form' => $form->createView(),));
    }

    public function sendEmailAjaxAction( Request $request)
    {

        $emailInformation = new Email();
        $form = $this->createForm(EmailFormType::class, $emailInformation);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $params = [];
            $params['user'] = $this->getParameter('mailer_user');
            $params['password'] = $this->getParameter('mailer_password');
            $params['addressee'] = $form->get('addressee')->getData();
            $params['addTo'] = 'praca.it@pixers.pl';
            $params['subject'] = $form->get('subject')->getData();

            $message = new Swift_Message();
            $params['body'] = $this->renderView('email/body.html.twig',
                [
                    'body' => $form->get('body')->getData(),
                    'addTo' => $form->get('addressee')->getData()
                ]
            );

            $message->setSubject($params['subject'])
                ->setFrom($params['user'])
                ->setTo($params['addTo'])
                ->setBody($params['body']);
            $this->get('mailer')->send($message);
        }


        return new Response('Email Sent');

    }


}