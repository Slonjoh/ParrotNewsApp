package com.parrotnewsapp

import android.animation.Animator
import android.content.Intent
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.airbnb.lottie.LottieAnimationView
import com.parrotnewsapp.MainActivity
import com.parrotnewsapp.R

class SplashActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_splash) // Reference the correct layout file

        // Find LottieAnimationView and start animation
        val animationView: LottieAnimationView = findViewById(R.id.splash_animation) // Use the correct ID
        // No need to setAnimation since it's already set in the XML

        // Set a listener for the animation end
        animationView.addAnimatorListener(object : Animator.AnimatorListener {
            override fun onAnimationStart(animation: Animator) {}
            override fun onAnimationEnd(animation: Animator) {
                // Transition to MainActivity when the animation ends
                val intent = Intent(this@SplashActivity, MainActivity::class.java)
                startActivity(intent)
                finish()
            }

            override fun onAnimationCancel(animation: Animator) {}
            override fun onAnimationRepeat(animation: Animator) {}
        })
    }
}

