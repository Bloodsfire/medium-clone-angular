import { Component, Input, OnInit } from '@angular/core'
import { BackedErrorsInterface } from '../../../types/backedErrors.interface'

@Component({
  selector: 'mc-backend-error-messages',
  templateUrl: './backendErrorMessages.component.html',
  styleUrls: ['./backendErrorMessages.component.scss'],
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input('backendErrors') backendErrorsProps: BackedErrorsInterface

  errorMessages: string[]

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrorsProps).map(
      (name: string) => {
        const messages = this.backendErrorsProps[name].join(', ')

        return `${name} ${messages}`
      }
    )
  }
}
