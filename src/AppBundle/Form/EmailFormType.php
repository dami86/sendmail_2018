<?php
/**
 * Created by PhpStorm.
 * User: Damian Kolesnik <damian.kolesnik@gmail.com>
 * Date: 2018-09-15
 * Time: 23:06
 */

namespace AppBundle\Form;

use AppBundle\Entity\Email;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;


class EmailFormType extends AbstractType {

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('addressee', EmailType::class, array('label' => 'Addressee'))
            ->add('subject', TextType::class, array('label' => 'Subject'))
            ->add('body', TextareaType::class, array('label' => 'Body'))
            ->add('Send Email', SubmitType::class);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array('data_class' => Email::class));
    }
}