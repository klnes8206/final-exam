﻿using UnityEngine;
using UnityEngine.SceneManagement;

public class controller : MonoBehaviour {

	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		
	}
    public void loadnewlevel() {
        SceneManager.LoadScene("final hw");
    }
    public void quitGame()
    {
        Application.Quit();
    }
}
